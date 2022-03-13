const {
  apartmentHunting,
} = require("../../apartmentHunting")

const getTimeExecution = (fn) => {
  var t0 = process.hrtime()
  fn
  var timeInMilliseconds = process.hrtime(t0)[1] / 1000000 // divide by a million to get nano to milli
  return timeInMilliseconds
}

const largeAppartment = []
const generateLargeApartment = () => {
  for (let i = 0; i < 1000; i++) {
    largeAppartment.push({
      gym: Math.random() > 0.96,
      office: Math.random() > 0.5,
      pool: Math.random() > 0.1,
      school: Math.random() > 2,
      store: Math.random() > 0.2,
    })
  }
}

generateLargeApartment()

describe("Performance Test", () => {
  it("apartmentHunting should fast 0.01 miliseconds to return value", () => {
    const timedExecution = getTimeExecution(
      apartmentHunting(
        [
          {
            gym: false,
            school: true,
            store: false,
          },
          {
            gym: true,
            school: false,
            store: false,
          },
          {
            gym: true,
            school: true,
            store: false,
          },
          {
            gym: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            school: true,
            store: true,
          },
        ],
        ["gym", "school", "store"]
      )
    )

    expect(timedExecution).toBeLessThan(0.01)
  })

  it("apartmentHunting should fast 0.005 miliseconds to return value", () => {
    const timedExecution = getTimeExecution(
      apartmentHunting(
        [
          {
            gym: true,
            office: false,
            pool: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            school: true,
            store: false,
          },
          {
            gym: true,
            school: false,
            store: false,
          },
          {
            gym: true,
            school: true,
            store: false,
          },
          {
            gym: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            school: true,
            store: true,
          },
          {
            gym: false,
            office: false,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: true,
            pool: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            office: true,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: false,
            school: false,
            store: true,
          },
          {
            gym: true,
            office: true,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: true,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: false,
            school: true,
            store: false,
          },
          {
            gym: false,
            office: true,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: false,
            school: false,
            store: true,
          },
          {
            gym: true,
            office: true,
            pool: false,
            school: false,
            store: false,
          },
          {
            gym: false,
            office: false,
            pool: true,
            school: false,
            store: false,
          },
        ],
        ["gym", "pool", "school", "store"]
      )
    )

    expect(timedExecution).toBeLessThan(0.005)
  })

  it("apartmentHunting should fast 0.2 miliseconds to return value", () => {
    const timedExecution = getTimeExecution(
      apartmentHunting(largeAppartment, ["gym", "pool", "school", "store"])
    )

    expect(timedExecution).toBeLessThan(0.2)
  })
})
