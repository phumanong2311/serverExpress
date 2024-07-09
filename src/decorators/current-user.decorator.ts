import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Users } from "src/entities";

export const CurrentUser = createParamDecorator((
  data: Users, ctx: ExecutionContext
) => {
  const request = ctx.switchToHttp().getRequest();
  return request.currentUser;
})
