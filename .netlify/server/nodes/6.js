

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_name_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Dvx0TPAu.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Ds-t-2tK.js","_app/immutable/chunks/entry.VzYP1Fgz.js"];
export const stylesheets = [];
export const fonts = [];
