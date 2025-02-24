(auth): nhóm các page lại nhưng không ảnh hưởng route
vd: (auth)-login-register: url sẽ là localhost/login | register
mặt định:
layout:
page: như index
schemaValidations: chứa các schema validate form
icon: lucide-react
UI: Shadcn UI

**Các file config**

1 `.next`: folder build
2 `public`: chứa ảnh,font,css
3 `app`: app router page.tsx như file index.tsx
4 `next-env.d.ts`: định nghĩa kiểu dữ liệu đặc biệt cho ts
5 `next.config`: chứa code config cho next
6 `layout.tsx`: sẽ là file chứa page.tsx: rule sẽ là mặc định đặt tên là layout
7 `components.json`:
8 `next.config.mjs`:
9 `postcss.config.js`:
10 `tailwind.config.ts`:
11 `tsconfig.json`:
12 `.gitignore`:
13 `.env`:

**Dưới đây là những Dependencies mà chúng ta cần cài**
