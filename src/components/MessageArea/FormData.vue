<template>
  <div id="form-data-container" ref="form">
    <form class="form-data">
      <div class="input-area">
        <input v-model="formData.nickname" maxlength="10" type="text" placeholder="用户昵称" />
        <div class="name-err" >{{errorData.nickname}}</div>
        <span>{{formData.nickname.length}}/10</span>
      </div>
      <div class="comment-area">
        <textarea  v-model="formData.content" maxlength="300" placeholder="输入内容"></textarea>
        <div class="content-err">{{errorData.content}}</div>
        <span>{{formData.content.length}}/300</span>
      </div>
      <button @click.prevent="handleClick" class="submit" :disabled="isSubmiting">{{isSubmiting?"提交中..." :"提交"}}</button>
    </form>
  </div>
</template>

<script>
import showMessage from "@/utils/showMessage";
export default {
  data() {
    return {
      formData: {
        nickname: "",
        content: "",
      },
      errorData: {
        nickname: "",
        content: "",
      },
      isSubmiting:false
    };
  },
  methods:{
    showMessage,
    handleClick(){
      this.errorData.nickname=this.formData.nickname?"":"请输入昵称！";
      this.errorData.content=this.formData.content?"":"请输入内容！";
      if (this.errorData.nickname || this.errorData.content) {
        return ;
      }
      this.isSubmiting = true;
      this.$emit('clicks', this.formData, (res)=>{
        this.formData.nickname="";
        this.formData.content="";
        this.isSubmiting = false;
        this.showMessage({
          content:res,
          type:'success',
          container:this.$refs.form,
          duration:800
        })
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/color.less";
.input-area {
  position: relative;
  width: 400px;
  margin-bottom: 10px;
  input {
    width: 400px;
    border: 1px dashed @gray;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
  }
  .name-err {
    font-size: 14px;
    color: #f30;
    margin-top: 4px;
  }
  span {
    position: absolute;
    right: 4px;
    bottom: 2px;
    color: @gray;
    font-size: 10px;
  }
}

.comment-area {
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  textarea {
    width: 100%;
    height: 150px;
    border: 1px dashed @gray;
    border-radius: 5px;
    padding: 10px;
    font-size: 14px;
    box-sizing: border-box;
    resize: none;
    outline: none;
  }
  .content-err {
    font-size: 14px;
    color: #f30;
    // margin-bottom: 8px ;
  }
  span {
    position: absolute;
    right: 4px;
    bottom: 6px;
    color: @gray;
    font-size: 10px;
  }
}
.submit {
  width: 100px;
  height: 35px;
  border-radius: 5px;
  background: darken(@primary,10%);
  outline: none;
  border: none;
  color: @white;
  cursor: pointer;
  &:disabled{
    background: darken(@primary, -10%);
    cursor: not-allowed;
  }
}
</style>