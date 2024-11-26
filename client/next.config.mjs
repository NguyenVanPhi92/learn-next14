/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http', // giao thuc
                hostname: 'localhost.com', // url image
                port: '4000' // port neu co
                // pathname: '/**' // all path name
            }
        ]
    },
    logging: {
        fetches: {
            fullUrl: true
        }
    }
}

export default nextConfig
