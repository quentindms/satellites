The purpose of this small project is to track satellites data from [n2yo website](https://www.n2yo.com/) through their public api.

## Getting Started

First, add a `.env.local` file to the project root folder. In it, add the following line:

```bash
NEXT_PUBLIC_API_SECRET_KEY=[YOUR_API_KEY]
```

Replace `[YOUR_API_KEY]` with your key. If you need one, register [here](https://www.n2yo.com/login/register/).

Build and run the solution with docker.

```bash
docker build -t nextjs-docker .
docker run -p 3000:3000 nextjs-docker
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
