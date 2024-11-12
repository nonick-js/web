import { Link } from '@nextui-org/link';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    // h1: ({ children }) => (
    //   <h1 className='scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl'>{children}</h1>
    // ),
    // h2: ({ children }) => (
    //   <h2 className='scroll-m-20 border-b border-divider pb- text-3xl font-semibold tracking-tight first:mt-0'>
    //     {children}
    //   </h2>
    // ),
    a: ({ href, target, children }) => (
      <Link href={href?.toString() ?? '#'} isExternal={target === '_blank'}>
        {children}
      </Link>
    ),
    ...components,
  };
}
