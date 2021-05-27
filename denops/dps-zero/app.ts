import { main } from "https://deno.land/x/denops_std@v0.8/mod.ts";

main(async ({ vim }) => {
  await vim.execute(`noremap <expr> 0 getline('.')[0 : col('.') - 2] =~# '^\\s\\+$' ? '0' : '^'`);
});
