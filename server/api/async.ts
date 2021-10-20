export default async (req: any, res: any) => {
  await someAsyncFunction()

  console.log(req)
  console.log(res)

  return {
    someData: true
  }
}

function someAsyncFunction() {
  throw new Error("Function not implemented.")
}
