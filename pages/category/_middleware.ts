import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
	if (req.url === '/category') {
		return NextResponse.redirect('/category/clothing');
	}

	return NextResponse.next();
}
