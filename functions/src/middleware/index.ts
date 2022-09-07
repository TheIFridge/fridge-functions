import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const middleware = () => {
    return [
        rateLimit({
            windowMs: 15 * 60 * 1000, // 15 minutes
            max: 100 // limit each IP to 100 requests per windowMs
        }),
        helmet()
    ]
}

export default middleware;