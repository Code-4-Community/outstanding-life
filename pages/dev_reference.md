# Logo

Use the SVG version of the logo to make the logo scalable and responsive to different screens.

How to include in code: 
```import Logo from '../logo.svg';```

How to render component:       
``` <Logo /> ```

# Color Palette 

These colors align with the logo.

Light pink: `#C00074`
Dark pink: `#A40854`
Light blue: `#0C85B6`
Dark blue: `#004C84`
Light green: `#7D9B22`
Dark green: `#507C28`
Light yellow: `#CCA20C`
Dark yellow: `#CC7400`
Dark grey (logo letters): `#464749`

# Font 

Inter, which is also the default font for Chakra.

# Components

Use Chakra for taking advantage of standard components when possible.

## Utilize our custom brand color interface for the color scheme

Use our color scheme values from the interface: ```../style/theme.js```.

Modify colorScheme attribute as desired within your code. Add numbers for varying
shades of a color. 

## Example component for a button: 

Documentation: https://chakra-ui.com/docs/components/form/button?scroll=true

To use for a button color scheme specifically, you must use color scheme value 500
in ```../style/theme.js```. Check which number to change for the component that
you are creating.

```
import { Button, ButtonGroup } from '@chakra-ui/react'

<Stack direction='row' spacing={4}>
  <Button colorScheme='lightPink' variant='solid' borderRadius='4'>
    DONATE
  </Button>
</Stack>
```