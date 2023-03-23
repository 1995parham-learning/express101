import { Request, Response, Router } from "express";

export class API {
  target: string;
  replaced: string;

  constructor(router: Router, target: string, replaced: string) {
    router.post("/replace", this.replace);

    this.target = target;
    this.replaced = replaced;
  }

  replace(req: Request, res: Response) {
    const input = req.body;

    API.traverse(input, this.target, this.replaced);

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
