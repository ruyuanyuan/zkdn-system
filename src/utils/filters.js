export const eventStatus = function(status) {
    let showValue = ''
    switch (Number(status)) {
        case 0:
            showValue = '待签收'
            break
        case 1:
            showValue = '待办理'
            break
        case 2:
            showValue = '办理中'
            break
        case 3:
            showValue = '待回访'
            break
        case 4:
            showValue = '待批示'
            break
        case 5:
            showValue = '待审核'
            break
        case 6:
            showValue = '已办结'
            break
    }
    return showValue
}
export const eventOrigin = function(value) {
    let showValue = ''
    switch (Number(value)) {
        case 0:
            showValue = '网格员自采'
            break
        case 1:
            showValue = '接诉即办'
            break
        case 2:
            showValue = '大城管'
            break
    }
    return showValue
}