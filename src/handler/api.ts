import { Request, Response, Router } from "express";

export class API {
  constructor(router: Router) {
    router.post("/replace", this.replace);
  }

  replace(req: Request, res: Response) {
    const input = req.body;

    API.traverse(input, "Elahe", "Parham");

    res.json(input);
  }

  static traverse(
    input: { [index: string]: any },
    target: string,
    replaced: string
  ) {
    for (const [key, value] of Object.entries(input)) {
      if (value === target) {
        input[key] = replaced;
      }
      if (typeof value == "object") {
        API.traverse(input[key], target, replaced);
      }
    }
  }
}
