import UserAgentDisplay from '@/views/userAgent/userAgent'
import { headers } from 'next/headers'

export default function UserAgentWrapper() {
    const headersList = headers()
    const userAgent = headersList.get('user-agent') ?? 'Unknown'

    return <UserAgentDisplay initialUserAgent={userAgent} />
}