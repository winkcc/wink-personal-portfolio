'use client'

export default function NotFound() {
  return (
    <html>
      <body>
        <div className="m-10 mt-10 rounded-md bg-red-100 p-10 text-red-900 ">
          <h1 className="font-semibold"> Something went wrong! </h1>
          <br />
          <br />
          Try to add &quot;en&quot; in the beginning of the path. For example: localhost:3000/en
        </div>
      </body>
    </html>
  )
}
