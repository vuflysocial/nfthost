import { HStack, Text, Flex, Button, VStack, 
    useColorModeValue, Image, Wrap, Tag, TagLeftIcon, Box
} from '@chakra-ui/react'
import { useWebsite } from '@/providers/WebsiteProvider'
import { useTemplate } from '@/hooks/useTemplate'
import { GiCutDiamond } from 'react-icons/gi'
import { TemplatesArr } from '@/utils/tools'

const TemplateList = () => {
    const { currentEditWebsite } = useWebsite();
    const { ChooseTemplate } = useTemplate();

    const containerColor = useColorModeValue('whiteAlpha.500', 'blackAlpha.500');
    const itemColor = useColorModeValue('whiteAlpha.400', 'blackAlpha.400');

    return (
        <VStack 
            id='templateList'
            spacing='1.5em'
            p='1em' 
            bg={containerColor}
            borderRadius='10px'
            boxShadow='md'
            h='100%'
            alignItems='flex-start'
            flex='1'
        >
            <VStack spacing='0' alignItems='flex-start'>
                <Text variant='content_subtitle' fontSize='12pt'>
                    Template List
                </Text>
                <Text fontSize='10pt'>
                    Choose template for your mint website
                </Text>
            </VStack>
            <Wrap spacing='1em'>
                {TemplatesArr?.map((template, idx) => (
                    <VStack
                        p='1.5em'
                        bg={itemColor}
                        borderRadius='10px'
                        maxW='290px'
                        key={idx}
                        alignItems='flex-start'
                        spacing='1em'
                    >
                        <Flex
                            h='180px'
                            w='230px'
                            overflow='hidden'
                            position='relative'
                            borderRadius='5px'
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Image 
                                position='absolute'
                                src={`/assets/templates/${template.key}.png`}
                                objectFit='cover' 
                                boxSize='250px'
                                opacity='.6' 
                            />
                            <Tag position='absolute' top='0' right='0'>
                                {template.sub === 'premium' && <TagLeftIcon as={GiCutDiamond} color='#08BDD4' />}
                                <Text>
                                    {template.sub === 'premium' ? 'Premium' : 'Free'}
                                </Text>
                            </Tag>
                        </Flex>
                        <VStack spacing='0' alignItems='flex-start'>
                            <Text fontSize='10pt' noOfLines='1'>
                                {template.key}
                            </Text>
                            <Text fontSize='8pt' noOfLines='1'>
                                by {template.creator}
                            </Text>
                        </VStack>
                        <Button 
                            w='full' 
                            size='sm' 
                            bg='orange.500' 
                            _hover={{ bg: 'orange.400' }} 
                            onClick={() => ChooseTemplate(template)} 
                            disabled={!currentEditWebsite.isPremium && template.sub === 'premium'}
                        >
                            Use
                        </Button>
                    </VStack>
                ))}
            </Wrap>
        </VStack>
    )
}

export default TemplateList