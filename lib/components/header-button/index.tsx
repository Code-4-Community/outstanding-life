import { Button, Text, useBreakpoint } from '@chakra-ui/react';
import { PAGE_SIZES } from '../../constants';

interface ButtonProps {
  buttonText?: String;
  onButtonClick?: () => void;
}

const HeaderButton: React.FC<ButtonProps> = ({ buttonText, onButtonClick }: ButtonProps) => {
  const breakpoint = useBreakpoint();

  return (
    <Button
      mt="5px"
      ml="10px"
      padding="15px 10px"
      borderRadius="md"
      variant="osl"
      _hover={{ textDecoration: 'none' }}
      _focus={{ outline: 'none' }}
      onClick={onButtonClick}>
      <Text
        margin="2px"
        fontSize={breakpoint && PAGE_SIZES.includes(breakpoint) ? 'xs' : 'lg'}
        fontWeight="bolder">
        {buttonText}
      </Text>
    </Button>
  );
};

export default HeaderButton;
