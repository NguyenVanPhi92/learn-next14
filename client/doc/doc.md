(auth): nhóm các page lại nhưng không ảnh hưởng route
vd: (auth)-login-register: url sẽ là localhost/login | register
mặt định:
layout:
page: như index
schemaValidations: chứa các schema validate form
icon: lucide-react
UI: Shadcn UI

_Folder_

`.next`: folder build
`public`: chứa ảnh,font,css
`app`: app router page.tsx như file index.tsx
`next-env.d.ts`: định nghĩa kiểu dữ liệu đặc biệt cho ts
`next.config`: chứa code config cho next
`layout.tsx`: sẽ là file chứa page.tsx: rule sẽ là mặc định đặt tên là layout
`components.json`:
`next.config.mjs`:
`postcss.config.js`:
`tailwind.config.ts`:
`tsconfig.json`:
`.gitignore`:
`.env`:
