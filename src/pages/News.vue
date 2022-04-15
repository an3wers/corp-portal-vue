<template>
    <div class="container">
        <h1>Новости</h1>
        {{ categoryNews }}
    </div>
</template>


<script>
// http://webapp/apinews/getcategories
import {ref, onMounted} from 'vue'
import axios from 'axios'
export default {
    setup() {
        const categoryNews = ref(null)

       const getCategoryNews = async () => {
           try {
               const responce = await axios.get('http://webapp/apinews/getcategories', 
                {withCredentials: true}
               )
               console.log(responce.data)
           } catch (error) {
               console.log(error.messege)
           }
        }

        onMounted(() => {
            getCategoryNews()
        })

        return {
            categoryNews
        }
    },
}
</script>