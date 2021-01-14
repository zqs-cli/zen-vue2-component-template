<template>
  <a-row :gutter="24" :class="['operate-row', showAll ? '' : 'limitH']" ref="searchBox">
    <a-col v-for="(fItem, idx) in config" :key="idx" :span="fItem.span">
      <a-button v-if="fItem.vType === 'Button'" type="primary" @click="operate(fItem)">
        {{ configMaps['Button']['text'] }}
      </a-button>
      <a-input-search
        v-if="fItem.vType === 'Input'"
        :placeholder="configMaps['Input']['placeholder']"
        v-model="query[configMaps['Input']['vModel']]"
        @search="operate(fItem)"
        enterButton />
      <a-range-picker
        v-if="fItem.vType === 'DatePicker'"
        format="YYYY-MM-DD HH:mm"
        v-model="query[configMaps['DatePicker']['vModel']]"
        :default-value="configMaps['DatePicker']['defaultValue']"
        @change="operate(fItem)">
        <a-icon slot="suffixIcon" type="smile" />
      </a-range-picker>
    </a-col>
    <slot />
    <a class="ant-dropdown-link" @click="expend">
      {{ showAll ? '收起' : '展开' }} <a-icon :type="showAll ? 'up' : 'down' " />
    </a>
  </a-row>
</template>
<script>
export default {
  name: 'SearchBox',
  props: {
    config: {
      type: Array,
      default: () => ([
        {
          vType: 'Button',
          span: 3,
          text: 'hello, btn'
        },
        {
          vType: 'Input',
          span: 6,
          placeholder: '请输入...',
          vModel: 'search'
        },
        {
          vType: 'DatePicker',
          span: 6,
          defaultValue: [],
          vModel: 'date'
        },
        {
          vType: 'DatePicker',
          span: 6,
          defaultValue: [],
          vModel: 'date'
        },
        {
          vType: 'DatePicker',
          span: 6,
          defaultValue: [],
          vModel: 'date'
        },
        {
          vType: 'DatePicker',
          span: 6,
          defaultValue: [],
          vModel: 'date'
        },
        {
          vType: 'DatePicker',
          span: 6,
          defaultValue: [],
          vModel: 'date'
        },
        {
          vType: 'Button',
          span: 3,
          text: 'hello, btn'
        }
      ])
    }
  },
  data () {
    const query = {}
    this.config.forEach(v => {
      const key = v['vModel']
      const value = v['defaultValue'] || ''
      key && (query[key] = value)
    })
    return {
      showAll: true,
      query
    }
  },
  computed: {
    configMaps () {
      const maps = {}
      this.config.forEach(v => {
        maps[v['vType']] = v
      })
      return maps
    }

  },
  methods: {
    operate (action) {
      this.$emit('change', action, this.query)
    },
    expend () {
      this.showAll = !this.showAll
    }
  }
}
</script>
<style lang="less" scoped>
.operate-row{
  position: relative;
  .ant-col{
    margin-bottom: 20px;
  }
  .ant-dropdown-link{
    position: absolute;
    right: 20px;
    top: 4px;
  }
}
.limitH{
  height: 50px;
  overflow: hidden;
}
</style>
