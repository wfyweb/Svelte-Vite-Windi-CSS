// router/index.js
import List from '@/views/List.svelte'
import Detail from '@/views/Detail.svelte'
import Home from '@/views/Home.svelte'

export default {
  '/': Home,
  '/list': List,
  '/detail/:id': Detail,
  
}

