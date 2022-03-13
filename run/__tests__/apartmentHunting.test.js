const {
  apartmentHunting,
} = require("../../apartmentHunting")

describe("Functional Test", () => {
  it("apartmentHunting function should be defined", () => {
    expect(apartmentHunting).toBeDefined()
  })

  it("apartmentHunting should have function type", () => {
    expect(typeof apartmentHunting).toBe("function")
  })

  it("apartmentHunting function should not throw any error", () => {
    expect(() => apartmentHunting([], []))
      .not()
      .toThrow()
  })

  it("apartmentHunting function should return 0 when blocks is empty", () => {
    expect(apartmentHunting([], [])).toEqual(0)
  })

  it("apartmentHunting function should return number type", () => {
    expect(apartmentHunting([], [])).toBeType("number")
  })
})
