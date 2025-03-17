import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the default Vietnamese locale
  redirect('/vi');
}
