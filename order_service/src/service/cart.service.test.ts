import * as Repository from "../repository/cart.repository";
import { CreateCart } from "../service/cart.service";


describe("cartService", () => {
  let repo: any;

  beforeEach(() => {
    repo = Repository.CartRepository;
  });

  afterEach(() => {
    repo = {} as any;
  });

  it("should return correct data while creating cart", async () => {
    const mockCart: any = {
      title: "smart phone",
      amount: 1200,
    };

    // jest.spyOn(Repository.CartRepository, "create").mockImplementationOnce(() =>
    //   Promise.resolve({
    //     message: "fake response from cart repository",
    //     input: mockCart,
    //   })
    // );

    const res = await CreateCart(mockCart, repo);

    expect(res).toEqual({
      message: "fake response from cart repository",
      input: mockCart,
    });
  });
});
