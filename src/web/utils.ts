import * as vscode from 'vscode';

export function generateHeaders({
    cfClientId,
    cfClientSecret,
}: {
    cfClientId: string | unknown;
    cfClientSecret: string | unknown;
}, headers: HeadersInit = {}): HeadersInit {
    const result = {
        'Content-Type': 'application/json',
        'X-Machine-Name': vscode.env.appHost,
        ...headers,
    };

    if (cfClientId && cfClientSecret) {
        result['CF-Access-Client-Id'] = cfClientId as string; 
        result['CF-Access-Client-Secret'] = cfClientId as string; 
    }

    return result;
}