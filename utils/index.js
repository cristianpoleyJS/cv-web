import Airtable from 'airtable'

export const getDataAirtable = async (baseKey, baseName) => {
  const res = []
  await new Promise((resolve) => {
    const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_API_KEY_AIRTABLE }).base(baseKey)
    base(baseName)
      .select()
      .firstPage((err, records) => {
        if (err) { console.error(err); return }
        records.forEach((record) => {
          res.push({
            id: record.id,
            ...record.fields
          })
        })
        resolve()
      })
  })
  return res
}
