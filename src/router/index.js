// router/index.js
import List from '@/views/List.svelte'
import Detail from '@/views/Detail.svelte'

export default {
  '/list': List,
  '/detail/:id': Detail
}

