import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class GqlAuthGuard extends AuthGuard('jwt') {
    getRequest(context: ExecutionContext) {
        const ctx = GqlExecutionContext.create(context);

        // return ctx.getContext().req: Extracts the actual HTTP request from the GraphQL context.
        // This allows the guard to work with the request object as it would in a REST API.
        return ctx.getContext().req;
    }
}
