<template>
<div class="message-area-container" >
    <FormData v-on="$listeners"></FormData>
    <h4>{{title}}<span>{{subTitle}}</span></h4>
    <DataList  :list="list"></DataList>
    <div class="loading" v-loading="isListLoading"></div>
</div>
</template>

<script>
import FormData from "./FormData";
import DataList from "./DataList";
export default {
    components:{
        FormData,
        DataList
    },
    props:{
        title:{
            type:String,
            default:""
        },
        subTitle:{
            type:String,
            default:""
        },
        list:{
            type:Array,
            default:()=>[]
        },
        isListLoading:{
            type:Boolean,
            default:false
        }
    },
}
</script>

<style scoped lang="less">
.loading{
    height: 100px;
    position: relative;
}
</style>