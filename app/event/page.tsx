import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function EventPage() {
	return (
		<>
			<Navbar />
			<main className="pt-24 container mx-auto px-4">
				<h1 className="text-3xl font-bold mb-4">Event Sekolah</h1>
				<p className="text-muted-foreground">Daftar event dan kegiatan sekolah</p>
			</main>
			<Footer />
		</>
	);
}
