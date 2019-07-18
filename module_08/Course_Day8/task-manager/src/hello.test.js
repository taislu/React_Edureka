function add(a=0, b=0) {
  return a + b
}

describe('Arithmetic', () => {
  it('adds two numbers correctly', () => {
    expect(add(10, 20)).toBe(30)
  })
  
  it('returns zero when no args passed', () => {
    expect(add()).toBe(0)
  })
})