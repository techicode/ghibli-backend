--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: ghibli; Type: SCHEMA; Schema: -; Owner: admin
--

CREATE SCHEMA ghibli;


ALTER SCHEMA ghibli OWNER TO admin;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Director; Type: TABLE; Schema: ghibli; Owner: admin
--

CREATE TABLE ghibli."Director" (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    picture character varying(100)
);


ALTER TABLE ghibli."Director" OWNER TO admin;

--
-- Name: Director_id_seq; Type: SEQUENCE; Schema: ghibli; Owner: admin
--

CREATE SEQUENCE ghibli."Director_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ghibli."Director_id_seq" OWNER TO admin;

--
-- Name: Director_id_seq; Type: SEQUENCE OWNED BY; Schema: ghibli; Owner: admin
--

ALTER SEQUENCE ghibli."Director_id_seq" OWNED BY ghibli."Director".id;


--
-- Name: Movie; Type: TABLE; Schema: ghibli; Owner: admin
--

CREATE TABLE ghibli."Movie" (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    release_date timestamp(3) without time zone NOT NULL,
    duration integer NOT NULL,
    ranking integer NOT NULL,
    cover_img character varying(100),
    director_id integer NOT NULL,
    producer_id integer NOT NULL,
    summary character varying NOT NULL
);


ALTER TABLE ghibli."Movie" OWNER TO admin;

--
-- Name: Movie_id_seq; Type: SEQUENCE; Schema: ghibli; Owner: admin
--

CREATE SEQUENCE ghibli."Movie_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ghibli."Movie_id_seq" OWNER TO admin;

--
-- Name: Movie_id_seq; Type: SEQUENCE OWNED BY; Schema: ghibli; Owner: admin
--

ALTER SEQUENCE ghibli."Movie_id_seq" OWNED BY ghibli."Movie".id;


--
-- Name: Producer; Type: TABLE; Schema: ghibli; Owner: admin
--

CREATE TABLE ghibli."Producer" (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    picture character varying(100)
);


ALTER TABLE ghibli."Producer" OWNER TO admin;

--
-- Name: Producer_id_seq; Type: SEQUENCE; Schema: ghibli; Owner: admin
--

CREATE SEQUENCE ghibli."Producer_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ghibli."Producer_id_seq" OWNER TO admin;

--
-- Name: Producer_id_seq; Type: SEQUENCE OWNED BY; Schema: ghibli; Owner: admin
--

ALTER SEQUENCE ghibli."Producer_id_seq" OWNED BY ghibli."Producer".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: ghibli; Owner: admin
--

CREATE TABLE ghibli._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE ghibli._prisma_migrations OWNER TO admin;

--
-- Name: Director id; Type: DEFAULT; Schema: ghibli; Owner: admin
--

ALTER TABLE ONLY ghibli."Director" ALTER COLUMN id SET DEFAULT nextval('ghibli."Director_id_seq"'::regclass);


--
-- Name: Movie id; Type: DEFAULT; Schema: ghibli; Owner: admin
--

ALTER TABLE ONLY ghibli."Movie" ALTER COLUMN id SET DEFAULT nextval('ghibli."Movie_id_seq"'::regclass);


--
-- Name: Producer id; Type: DEFAULT; Schema: ghibli; Owner: admin
--

ALTER TABLE ONLY ghibli."Producer" ALTER COLUMN id SET DEFAULT nextval('ghibli."Producer_id_seq"'::regclass);


--
-- Data for Name: Director; Type: TABLE DATA; Schema: ghibli; Owner: admin
--

COPY ghibli."Director" (id, name, picture) FROM stdin;
1	Isao Takahata	
2	Hayao Miyazaki	\N
3	Tomomi Mochizuki	
4	Yoshifumi Kondō	\N
5	Hiroyuki Morita	\N
6	Gorō Miyazaki	\N
7	Hiromasa Yonebayashi	\N
8	Michael Dudok De Wit	\N
\.


--
-- Data for Name: Movie; Type: TABLE DATA; Schema: ghibli; Owner: admin
--

COPY ghibli."Movie" (id, title, release_date, duration, ranking, cover_img, director_id, producer_id, summary) FROM stdin;
2	Castle in the Sky	1986-08-02 00:00:00	124	96		1	1	A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle. A young boy stumbles into a mysterious girl who floats down from the sky. The girl, Sheeta, was chased by pirates, army and government secret agents.
3	My Neighbor Totoro	1988-04-16 00:00:01	86	95	\N	2	2	This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro.
5	Only Yesterday	1991-07-20 00:00:00	118	100	\N	1	3	Unmarried career woman Taeko Okajima (Miki Imai) takes her first extended trip outside her native Tokyo when she travels to rural Yamagata to visit her sister's family during the annual safflower harvest. On the train, Taeko daydreams about her pre-adolescent self. As her vacation progresses, she has extended flashbacks about the frustrations and small pleasures of her childhood, and wonders if her stress-filled adult life is what the young Taeko would have wanted for herself.
6	Grave of the Fireflies	1988-04-16 00:00:00	89	100	\N	1	2	A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister, Setsuko (Ayano Shiraishi), after an American firebombing during World War II separates the two children from their parents. Their tale of survival is as heartbreaking as it is true to life. The siblings rely completely on each other and struggle against all odds to stay together and stay alive.
8	Kiki's Delivery Service	1989-07-29 13:29:42	102	98	\N	2	1	In this anime feature, 13-year-old Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village's tradition for witches in training. After learning to control her broomstick, Kiki sets up a flying courier service and soon becomes a fixture in the community. But when the insecure young witch begins questioning herself and loses her magic abilities, she must overcome her self-doubt to get her powers back.
9	Porco Rosso	1992-07-18 13:33:47	102	95	\N	2	3	In Italy in the 1930s, sky pirates in biplanes terrorize wealthy cruise ships as they sail the Adriatic Sea. The only pilot brave enough to stop the scourge is the mysterious Porco Rosso (Shuichiro Moriyama), a former World War I flying ace who was somehow turned into a pig during the war. As he prepares to battle the pirate crew's American ace, Porco Rosso enlists the help of spunky girl mechanic Fio Piccolo (Akemi Okamura) and his longtime friend Madame Gina (Tokiko Kato).
10	Ocean Waves	1993-05-05 13:34:59	72	88	\N	3	3	As he journeys back from Tokyo to his high school for a reunion, Taku Morisaki recounts his memories of his school days, focussing in particular on a love triangle that developed between him and two of his friends.
11	Pom Poko	1994-07-16 13:40:05	119	85	\N	1	3	Isao Takahata's film uses the tanuki, creatures of myth, as his heroes. Beloved folk-tale characters, they are viewed as bringers of fortune with shape-changing abilities. In this film, their forest home is threatened by urban development and, to save it, they must use all their supernatural talents.
12	Whisper of the Heart	1995-07-15 13:40:32	111	94	\N	4	3	Based on the manga with the same title
13	Princess Mononoke	1997-07-12 13:40:42	133	93	\N	2	3	In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict.
14	My Neighbors the Yamadas	1999-07-17 13:40:55	104	78	\N	1	3	The Yamadas are a normal Japanese family. Father Takashi and his wife Matsuke argue over a TV remote control, Grandma Shige always brightens the day with her proverbs and daughter Nanoko likes to get lost in a shopping centre.
15	Spirited Away	2001-07-20 13:41:12	125	97	\N	2	3	In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.
16	The Cat Returns	2002-07-19 13:41:22	75	91	\N	5	3	High school student Haru (Chizuru Ikewaki) rescues a cat that was about to be run over by a truck and discovers the cat is actually a prince named Lune. Out of gratitude
17	Howl's Moving Castle	2004-11-20 13:41:35	119	87	\N	2	3	Sophie (Emily Mortimer) has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl (Christian Bale), who lives in a magical flying castle. However, the evil Witch of Waste (Lauren Bacall) takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty.
18	Tales from Earthsea	2006-07-29 13:41:45	115	43	\N	6	3	n the land of Earthsea, a mysterious force threatens to plunge humanity into destruction and chaos. A powerful wizard named Sparrowhawk seeks the source of his world's imbalance, and along the way rescues a runaway prince named Arren. When Sparrowhawk's powers begin to weaken, he and Arren must join forces with a former priestess and her daughter to defeat an evil foe whose quest for immortality will destroy Earthsea.
19	Ponyo	2008-07-19 13:41:56	103	91	\N	2	3	During a forbidden excursion to see the surface world, a goldfish princess encounters a human boy named Sosuke, who gives her the name Ponyo. Ponyo longs to become human, and as her friendship with Sosuke grows, she becomes more humanlike. Ponyo's father brings her back to their ocean kingdom, but so strong is Ponyo's wish to live on the surface that she breaks free, and in the process, spills a collection of magical elixirs that endanger Sosuke's village.
20	Arrietty	2010-07-17 13:42:06	94	95	\N	7	3	Arrietty, a tiny teenager, lives with her parents in the recesses of a suburban home, unbeknown to the homeowner and housekeeper. Like others of her kind, Arrietty remains hidden from her human hosts, but occasionally ventures forth from beneath the floorboards to borrow sugar cubes and other supplies. A secret friendship forms when 12-year-old Shawn meets Arrietty, but their relationship could spell danger for Arrietty's family.
21	From Up on Poppy Hill	2011-07-16 13:42:20	91	86	\N	6	3	It's 1963 and Japan is in the midst of swift modernisation, leaving behind the Second World War's painful memories and focusing on a brighter future, symbolised by the coming year's Tokyo Olympics.
22	The Wind Rises	2013-07-20 13:42:47	126	88	\N	2	3	A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi (Hideaki Anno), whose storied career includes the creation of the A6M World War II fighter plane.
23	The Tale of the Princess Kaguya	2013-11-23 13:43:27	137	100	\N	1	4	A tiny nymph found inside a bamboo stalk grows into a beautiful and desirable young woman, who orders her suitors to prove their love by completing a series of near-impossible tasks.
24	When Marnie Was There	2014-07-19 13:43:40	103	91	\N	7	4	A young girl is sent to the country for health reasons, where she meets an unlikely friend in the form of Marnie, a young girl with flowing blonde hair. As the friendship unravels Marnie has closer ties to the protagonist than we might expect.
25	The Red Turtle	2016-05-18 13:43:49	80	93	\N	8	3	A massive sea turtle destroys a stranded man's raft every time he tries to sail away from a tropical island.
26	Earwig and the Witch	2020-12-20 13:44:04	82	29	\N	6	3	A headstrong orphan discovers a world of spells and potions while living with a selfish witch.
\.


--
-- Data for Name: Producer; Type: TABLE DATA; Schema: ghibli; Owner: admin
--

COPY ghibli."Producer" (id, name, picture) FROM stdin;
1	Hayao Miyazaki	
2	Tōru Hara	\N
3	Toshio Suzuki	\N
4	Yoshiaki Nishimura	\N
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: ghibli; Owner: admin
--

COPY ghibli._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
a0b3344c-d8d5-4bd4-aa71-a8e2fbe080d6	c001e0ea503f98bbd1f167ebd387d9c8d4b7cef2dde0433322f1ba0a8307f56e	2022-09-18 11:28:15.424295-03	20220918142815_init	\N	\N	2022-09-18 11:28:15.386812-03	1
05f71162-2df7-40e3-8fc5-debc41d15a01	5821391a7b3359c2cf0cad8ffdfbfd4f6ebebfb78d5c6a667aeae9e161877ac1	2022-09-18 11:30:49.451148-03	20220918143049_init	\N	\N	2022-09-18 11:30:49.434459-03	1
\.


--
-- Name: Director_id_seq; Type: SEQUENCE SET; Schema: ghibli; Owner: admin
--

SELECT pg_catalog.setval('ghibli."Director_id_seq"', 8, true);


--
-- Name: Movie_id_seq; Type: SEQUENCE SET; Schema: ghibli; Owner: admin
--

SELECT pg_catalog.setval('ghibli."Movie_id_seq"', 26, true);


--
-- Name: Producer_id_seq; Type: SEQUENCE SET; Schema: ghibli; Owner: admin
--

SELECT pg_catalog.setval('ghibli."Producer_id_seq"', 4, true);


--
-- Name: Director Director_pkey; Type: CONSTRAINT; Schema: ghibli; Owner: admin
--

ALTER TABLE ONLY ghibli."Director"
    ADD CONSTRAINT "Director_pkey" PRIMARY KEY (id);


--
-- Name: Movie Movie_pkey; Type: CONSTRAINT; Schema: ghibli; Owner: admin
--

ALTER TABLE ONLY ghibli."Movie"
    ADD CONSTRAINT "Movie_pkey" PRIMARY KEY (id);


--
-- Name: Producer Producer_pkey; Type: CONSTRAINT; Schema: ghibli; Owner: admin
--

ALTER TABLE ONLY ghibli."Producer"
    ADD CONSTRAINT "Producer_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: ghibli; Owner: admin
--

ALTER TABLE ONLY ghibli._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Movie Movie_director_id_fkey; Type: FK CONSTRAINT; Schema: ghibli; Owner: admin
--

ALTER TABLE ONLY ghibli."Movie"
    ADD CONSTRAINT "Movie_director_id_fkey" FOREIGN KEY (director_id) REFERENCES ghibli."Director"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Movie Movie_producer_id_fkey; Type: FK CONSTRAINT; Schema: ghibli; Owner: admin
--

ALTER TABLE ONLY ghibli."Movie"
    ADD CONSTRAINT "Movie_producer_id_fkey" FOREIGN KEY (producer_id) REFERENCES ghibli."Producer"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

