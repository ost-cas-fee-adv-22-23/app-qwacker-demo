import Link from 'next/link';
import { Link as TheLink } from '../components/link';

export default function LinkDemo() {
  return (
    <div className="w-60 m-auto mt-10">
      <h2>Link with a</h2>
      <TheLink href="/image-demo">a link</TheLink>
      <h2 className="mt-20">Link with next/link</h2>
      <TheLink href="/image-demo" linkComponent={Link}>
        next/link
      </TheLink>
    </div>
  );
}
