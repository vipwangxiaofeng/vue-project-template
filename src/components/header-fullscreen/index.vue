<template>
	<el-tooltip effect="dark" :content="screenfull ? '退出全屏' : '全屏'" placement="bottom">
		<el-button class="d2-mr btn-text can-hover" type="text" @click="toggle">
			<svg-icon v-if="screenfull" icon-class="exitscreenfull" style="font-size:24px;color:#555;"></svg-icon>
			<svg-icon v-else icon-class="screenfull" style="font-size:24px;color:#555;"></svg-icon>
			<!-- <i
        v-if="screenfull"
        class="el-icon-full-screen"
        style="font-size:24px;color:#555;"
      ></i>
      <i
        v-else
        class="el-icon-full-screen"
        style="font-size:24px;color:#555;"
      ></i> -->
			<!-- <d2-icon v-if="active" name="compress" />
      <d2-icon v-else name="arrows-alt" style="font-size: 16px" /> -->
		</el-button>
	</el-tooltip>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters(['screenfull']),
	},
	methods: {
		toggle() {
			this.$store.dispatch('screenfull/toggle')
		},
	},
}
</script>
