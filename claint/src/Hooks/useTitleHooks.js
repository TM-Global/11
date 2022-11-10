import { useEffect } from 'react'
const useTitleHooks = (title) => {
   useEffect(() => {
   document.title = `${title} - Dream PhotoGraphy`
   }, [title])
};

export default useTitleHooks;