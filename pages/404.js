import NextLink from 'next/link'
import Head from 'next/head'
import { Text, Flex, Button } from '@chakra-ui/react'
import MainNavbar from '@/components/MainNavbar'
import MainFooter from '@/components/MainFooter'
import { AiOutlineArrowLeft, AiOutlineWarning } from 'react-icons/ai'

const NotFound = () => {

    return (
        <main style={{ minHeight: '100vh' }}>
            <Head>
                <title>404 | NFT Host</title>
                <meta name="title" content='NFT Host' />
                <meta name="description" content='NFT Host is a website where you can generate NFT collections and create NFT minting website.' />
                <meta name="keywords" content='NFT Host, Host NFT, Mint Website, Mint NFT Website Hosting, Mint NFT, NFT, Mint, Crypto Currency, Crypto, Ethereum' />
                <meta name="robots" content='index, follow' />
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content='en' />

                <meta property="og:type" content='website' />
                <meta property="og:url" content='https://www.nfthost.app/' />
                <meta property="og:title" content='NFT Host' />
                <meta property="og:description" content='NFT Host is a website where you can generate NFT collections and create NFT minting website.' />
                <meta property="og:image" content='https://www.nfthost.app/assets/logo.png' />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content='https://www.nfthost.app/' />
                <meta property="twitter:title" content='NFT Host' />
                <meta property="twitter:description" content='NFT Host is a website where you can generate NFT collections and create NFT minting website.' />
                <meta property="twitter:image" content='https://www.nfthost.app/assets/logo.png' />
            </Head>
            <Flex flexDir='column' minH='100vh'>
                <MainNavbar isColorMode />
                <Flex flexDir='column' justifyContent='center' alignItems='center' w='full' flex='1' mb='4em'>
                    <AiOutlineWarning fontSize='28pt' />
                    <Flex flexDir='column' alignItems='center' mt='.5em'>
                        <Text fontWeight='bold' fontSize='10pt'>
                            404 Error
                        </Text>
                        <Text fontSize='10pt'>
                            Page Not Found
                        </Text>
                    </Flex>
                    <NextLink href='/' shallow passHref>
                        <Button leftIcon={<AiOutlineArrowLeft />} color='white' bg='rgb(52,140,212)' _hover={{ bg: 'rgb(39,107,163)' }} size='sm' mt='1.5em'>
                            Landing Page
                        </Button>
                    </NextLink>
                </Flex>
            </Flex>
            <MainFooter />
        </main>
    )
}

export default NotFound