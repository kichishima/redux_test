# 手順
- 所定のライブラリをインストールする
    - "@reduxjs/toolkit": "^1.6.1"
    - "react-redux": "^7.2.4",
    - "redux-devtools-extension": "^2.13.9" 開発用
    - "redux-devtools": "^3.7.0"
- store.js : 
    - state初期値
    - reducer（どんな処理をするか）
    - createStore
    - initializeStore(新しいstoreを作成? たぶん)
- _app.js : useStore, Provider (store.jsを呼び出して、新しいstoreを受け取る)
- 新しいコンポーネントに反映される

# memo
- stateの呼び出し方  
`const count = useSelector((state) => state.count)`
- dispatch  

```
const dispatch = useDispatch()  
const increment = () =>  
dispatch({ type: 'INCREMENT', })  
```

__できること__  
- ページ遷移を跨いだstate値の保持
- 遷移前後のどの階層のコンポーネントでも変更・参照可能
- 違う（出力用の）コンポーネントから同一stateにアクセス可能
__できないこと__
- リロード後のstate値の保持（*リロードすると消滅する）


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev    
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
