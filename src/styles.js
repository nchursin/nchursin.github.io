const flex = {
  display: 'flex',
}

const flexSize = (size) => ({
  flex: size
})

const flexAlignItemsCenter = {
  ...flex,
  alignItems: 'center',
}

const flexAlignSelfCenter = {
  ...flex,
  alignSelf: 'center',
}

const flexJustifyContentStart = {
  ...flex,
  justifyContent: 'flex-start',
}

const flexJustifyContentCenter = {
  ...flex,
  justifyContent: 'center',
}

const flexJustifyContentSpaceEvenly = {
  ...flex,
  justifyContent: 'space-evenly',
}

const flexColumn = {
  ...flex,
  flexFlow: 'column',
}

const flexRow = {
  ...flex,
  flexFlow: 'row',
}

const flexRowStart = {
  ...flexRow,
  ...flexJustifyContentStart,
}

export default {
  flex: {
    flex: flexSize,
    display: flex,
    column: flexColumn,
    row: flexRow,
    justifyContentStart: flexJustifyContentStart,
    justifyContentCenter: flexJustifyContentCenter,
    justifyContentSpaceEvenly: flexJustifyContentSpaceEvenly,
    rowStart: flexRowStart,
    alignItemsCenter: flexAlignItemsCenter,
    alignSelfCenter: flexAlignSelfCenter,
  },
  size: {
    width: (width) => ({ width }),
  },
  paddings: {
    marginRight: (marginRight) => ({ marginRight }),
  }
}
