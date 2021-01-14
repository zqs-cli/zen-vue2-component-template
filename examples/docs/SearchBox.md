## SearchBox

提供了常用搜索功能包括: Button, Input, DatePicker等功能

### 使用方法



### 使用示例
:::demo
```html
<search-box @change="searchBoxChange" />
<script>
export default {
  data() {
    return {}
  },
  methods: {
      searchBoxChange(val) {
          console.log(val)
      }
  }
}
</script>
```
:::

