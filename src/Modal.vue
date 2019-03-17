<template>
    <transition name="modal-transition">
        <div class="modal">
            <div class="Manage-rules">Manage rules
            </div>
            <div class="Rectangle"></div>
            <input-modal></input-modal>
        </div>
    </transition>
</template>

<script>
import InputModal from '@/InputModal'
export default {
  name: 'Modal',
  components: {
    InputModal
  },
  data () {
    return {
    }
  },
  props: {
    modalOpened: {
      type: Boolean
    }
  }
}

</script>

<style scoped>
    .modal {
        position: relative;
        margin-top: 13px;
        transition: opacity 1s ease, transform 1s ease;
        border: solid 1px #c8d2dd;
        width: 216px;
        height: 234px;
        border-radius: 5px;
        box-shadow: 2px 3px 7px 2px rgba(0, 0, 0, 0.05), 0 2px 12px 0 rgba(132, 149, 163, 0.32);
        background-color: #ffffff;

    }

    .modal:before {
        content: '';
        display: block;
        position: absolute;
        left: 97px;
        bottom: 100%;
        width: 0;
        height: 0;
        border: 11px solid transparent;
        border-bottom-color: #c8d2dd;
    }

    .modal:after {
        content: '';
        display: block;
        position: absolute;
        left: 99px;
        bottom: 100%;
        width: 0;
        height: 0;
        border: 9px solid transparent;
        border-bottom-color: white;
    }

    .modal-transition-enter-active {
        opacity: 1;

    }

    .modal-transition-enter{
        opacity: 0;

    }
    .modal-transition-leave-active {
        opacity: 0;

    }
    .modal-transition-leave{
        opacity: 1;
    }
    .Manage-rules{
        margin-top: 9px;
        margin-left: 17px;
        margin-bottom: 10px;
        width: 85px;
        height: 20px;
        font-family: Lato;
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.43;
        letter-spacing: normal;
        color: #3c4a5a;

    }
    .Rectangle{
        border-bottom: 1px solid #e8ecf2;
        width: 216px;
    }

</style>
