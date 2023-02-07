# hotjava studios project

## 1. Blog with Markdown (Next.js Blog Clone)

## 2. Blog with Sanity()

### install sanity
npm create sanity@latest -- --coupon sonny2022

1. move sanity package --> project package and run yarn

2. move sanity schema folder --> project root

3. move sanity.cli.js, sanity.config.js --> project root

4. delete sanity folder

5. edit sanity.config.js

6. edit sanity.cli.js

7. npm run dev and http://localhost:3000/sanity-studio


## install next-sanity

1. npm install next-sanity @portabletext/react @sanity/image-url

2. ref: https://github.com/sanity-io/next-sanity

3. create /pages/studio/[[...index]].jsx and copy code

4. yarn run dev --> basepath: /sanity-studio and 
    - cors
    - login
    - add post ...
5. (options)

6. /pages/api/previews.js

7. /pages/api/exit-preview.js:

8. /lib/sanity.client.js

9. /lib/sanity.preview.js

10. test
    - /localhost:3000/api/preview
    - /localhost:3000/api/exit-preview

11. /pages/index.jsx
    - make query
    - add code getStaticProps and return preview and posts




    

