
export function generateRandomEmail(prefix='testuser')
{
    const email = `${prefix}_${Date.now()}@email.com`;
    return email;
}