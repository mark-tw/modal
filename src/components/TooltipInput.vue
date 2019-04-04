<template lang="pug">
    label(
    :class="{active: hasFocus}"
    ) {{label}}
        .input-wrapper
            input.input-tooltip(
            :value="inputValue"
            @input="onInput"
            @focus="hasFocus = true"
            @blur="hasFocus = false"
            ref="input"
            )
            .input-mask
                span {{inputValue}}
</template>

<script>
export default {
  name: 'TooltipInput',
  props: {
    label: {
      type: String,
      default: 'label'
    }
  },
  data () {
    return {
      inputValue: '',
      hasFocus: false
    }
  },
  methods: {
    onInput () {
      let value = this.$refs.input.value
      value = value.replace(
        /[^0-9]/g, ''
      ).replace(
        /(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '
      )
      this.$refs.input.value = value
      this.inputValue = value
    }
  }
}
</script>

<style scoped>
.input-mask {
    border-bottom: 1px solid blue;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    pointer-events: none;
    opacity: 0;
}
.input-wrapper {
    width: fit-content;
    height: fit-content;
    position: relative;
}
.input-mask span {
    opacity: 0;
    font-size: inherit;
    font-family: inherit;
}
input{
    font-size: inherit;
    font-family: inherit;
}
.active{
    color: blue;

}
.active .input-mask{
    opacity: 1;
}
label:focus-within{
    color: #2db9f0;
}
input{
    border-top: none;
    border-left: none;
    border-right: none;
    border-color: white;
    outline:none;
    font-family: Lato;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
    margin-top: 6px;
    color: #3c4a5a;

}
input:focus{
    caret-color: #2db9f0;
    font-family: Lato;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: normal;
}
</style>
