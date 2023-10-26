describe("Suite", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should pass", async () => {
    const result = new Promise((resolve) => {
      setTimeout(() => resolve(true), 500)
    });

    debugger
    await jest.runAllTimersAsync();

    expect(result).resolves.toBe(true);
  });
});
