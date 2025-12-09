import fs from 'fs'
import path from 'path'

export async function POST(req) {
  try {
    const data = await req.json()
    const fileDir = path.join(process.cwd(), 'data')
    const filePath = path.join(fileDir, 'preinscriptions.csv')

    if (!fs.existsSync(fileDir)) fs.mkdirSync(fileDir)

    const headers = ['name', 'email', 'phone', 'message']

    if (!fs.existsSync(filePath)) {
      // Write headers using semicolons
      fs.writeFileSync(filePath, headers.join(';') + '\n', 'utf-8')
    }

    // Wrap values in quotes and escape any quotes inside
    const line = [
      data.name.replace(/"/g, '""'),
      data.email.replace(/"/g, '""'),
      data.phone.replace(/"/g, '""'),
      data.message.replace(/"/g, '""')
    ].map(v => `"${v}"`).join(';') + '\n'

    fs.appendFileSync(filePath, line, 'utf-8')

    return new Response(JSON.stringify({ message: 'Submission saved!' }), { status: 200 })
  } catch (err) {
    console.error(err)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'preinscriptions.csv')

    if (!fs.existsSync(filePath)) {
      return new Response('name;email;phone;message\n', { status: 200 })
    }

    const csv = fs.readFileSync(filePath, 'utf-8')
    return new Response(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="preinscriptions.csv"',
      },
    })
  } catch (err) {
    return new Response('Error reading CSV', { status: 500 })
  }
}
