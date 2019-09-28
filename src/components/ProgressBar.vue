<template>

    <div class="progress-container">
        <div class="progress-bar"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

    .progress-container {
        left: 0;
        width: 100%;
        height: 0.4em;
        margin-bottom: 0px;
        position: fixed;
        top: 0px;
        overflow: hidden;
        content: "";
        display: table;
        table-layout: fixed;
        z-index: 999999;
    }

    .progress-bar {
        width: 0%;
        float: left;
        height: 100%;
        z-index: 99;
        max-width: 100%;
        background-color: #62a420;
        -webkit-transition: width .6s ease;
        -o-transition: width .6s ease;
        transition: width .6s ease;
    }
</style>
