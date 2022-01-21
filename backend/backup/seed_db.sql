--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1 (Debian 14.1-1.pgdg110+1)
-- Dumped by pg_dump version 14.1 (Debian 14.1-1.pgdg110+1)

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

ALTER TABLE ONLY public."Bike" DROP CONSTRAINT "Bike_bikeModelId_fkey";
ALTER TABLE ONLY public."Bike" DROP CONSTRAINT "Bike_bikeColorId_fkey";
ALTER TABLE ONLY public."Bike" DROP CONSTRAINT "Bike_bikeBrandId_fkey";
ALTER TABLE ONLY public."BikeModel" DROP CONSTRAINT "BikeModel_bikeBrandId_fkey";
DROP INDEX public."User_username_key";
DROP INDEX public."User_email_key";
DROP INDEX public."Bike_engineNumber_key";
DROP INDEX public."Bike_chassisNumber_key";
DROP INDEX public."BikeModel_name_key";
DROP INDEX public."BikeColor_name_key";
DROP INDEX public."BikeBrand_name_key";
ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
ALTER TABLE ONLY public."Bike" DROP CONSTRAINT "Bike_pkey";
ALTER TABLE ONLY public."BikeModel" DROP CONSTRAINT "BikeModel_pkey";
ALTER TABLE ONLY public."BikeColor" DROP CONSTRAINT "BikeColor_pkey";
ALTER TABLE ONLY public."BikeBrand" DROP CONSTRAINT "BikeBrand_pkey";
ALTER TABLE public."User" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public."BikeModel" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public."BikeColor" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public."BikeBrand" ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public."Bike" ALTER COLUMN id DROP DEFAULT;
DROP TABLE public._prisma_migrations;
DROP SEQUENCE public."User_id_seq";
DROP TABLE public."User";
DROP SEQUENCE public."Bike_id_seq";
DROP SEQUENCE public."BikeModel_id_seq";
DROP TABLE public."BikeModel";
DROP SEQUENCE public."BikeColor_id_seq";
DROP TABLE public."BikeColor";
DROP SEQUENCE public."BikeBrand_id_seq";
DROP TABLE public."BikeBrand";
DROP TABLE public."Bike";
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Bike; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Bike" (
    id integer NOT NULL,
    "bikeBrandId" integer NOT NULL,
    "bikeModelId" integer NOT NULL,
    "bikeColorId" integer NOT NULL,
    "chassisNumber" text NOT NULL,
    "engineNumber" text NOT NULL
);


ALTER TABLE public."Bike" OWNER TO postgres;

--
-- Name: BikeBrand; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BikeBrand" (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."BikeBrand" OWNER TO postgres;

--
-- Name: BikeBrand_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."BikeBrand_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."BikeBrand_id_seq" OWNER TO postgres;

--
-- Name: BikeBrand_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."BikeBrand_id_seq" OWNED BY public."BikeBrand".id;


--
-- Name: BikeColor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BikeColor" (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."BikeColor" OWNER TO postgres;

--
-- Name: BikeColor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."BikeColor_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."BikeColor_id_seq" OWNER TO postgres;

--
-- Name: BikeColor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."BikeColor_id_seq" OWNED BY public."BikeColor".id;


--
-- Name: BikeModel; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."BikeModel" (
    id integer NOT NULL,
    name text NOT NULL,
    "bikeBrandId" integer NOT NULL
);


ALTER TABLE public."BikeModel" OWNER TO postgres;

--
-- Name: BikeModel_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."BikeModel_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."BikeModel_id_seq" OWNER TO postgres;

--
-- Name: BikeModel_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."BikeModel_id_seq" OWNED BY public."BikeModel".id;


--
-- Name: Bike_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Bike_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Bike_id_seq" OWNER TO postgres;

--
-- Name: Bike_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Bike_id_seq" OWNED BY public."Bike".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    email text,
    username text NOT NULL,
    "passwordHash" text NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Bike id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Bike" ALTER COLUMN id SET DEFAULT nextval('public."Bike_id_seq"'::regclass);


--
-- Name: BikeBrand id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BikeBrand" ALTER COLUMN id SET DEFAULT nextval('public."BikeBrand_id_seq"'::regclass);


--
-- Name: BikeColor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BikeColor" ALTER COLUMN id SET DEFAULT nextval('public."BikeColor_id_seq"'::regclass);


--
-- Name: BikeModel id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BikeModel" ALTER COLUMN id SET DEFAULT nextval('public."BikeModel_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Bike; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Bike" (id, "bikeBrandId", "bikeModelId", "bikeColorId", "chassisNumber", "engineNumber") FROM stdin;
1	1	1	1	MLHJA1403M5801819	JA14E1601819
\.


--
-- Data for Name: BikeBrand; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BikeBrand" (id, name) FROM stdin;
1	HONDA - ฮอนด้า
\.


--
-- Data for Name: BikeColor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BikeColor" (id, name) FROM stdin;
1	แดง
\.


--
-- Data for Name: BikeModel; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."BikeModel" (id, name, "bikeBrandId") FROM stdin;
1	AFS110MSFC	1
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, email, username, "passwordHash") FROM stdin;
1	nutthawut.ki@gmail.com	jeep	$argon2i$v=19$m=4096,t=3,p=1$NuSCQV5p7PlmDCqQq8exMg$lYSbkLXcAcHjsIpL0+g7IPUhNgE/pt6HSo7V6feiNHQ
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
3b85bfca-1519-426a-b5d8-486752e7824b	f1e44ceb259b7176116d345456b14255c9856e8532982d931fbd861ba4d6776e	2022-01-19 12:38:39.976278+00	20220117094908_create_users	\N	\N	2022-01-19 12:38:39.965805+00	1
36e27b92-c6ff-4a11-9706-87d37a3e802e	f13f6a34b3149106d79b463074eb7c81e4ee285504ecf63e2d16521c0a9487a1	2022-01-19 12:38:39.985959+00	20220118133730_add_authentication	\N	\N	2022-01-19 12:38:39.980015+00	1
b2aeddae-3d42-486e-b10f-f0e338ebe6ab	7c6f85490dc0b95dc6ea0259c779a43bcf8b7cc15fa2040a3d4233d31450f143	2022-01-19 12:38:39.992649+00	20220118141803_rename_field	\N	\N	2022-01-19 12:38:39.987831+00	1
ebd3b5e6-db71-45c9-8dea-3b3a45289a5e	62f464317a63f6247d788c4b0a83cfb8d7e349be3c80ca8e28e9e96b532c350e	2022-01-21 08:56:38.572047+00	20220121085638_add_bike_models	\N	\N	2022-01-21 08:56:38.548142+00	1
3abc5b99-6312-4ced-9d47-0c4f370f78d8	637235ce86fd9bf5d734526df7e40aee2b6fdc84a3ad7c45e7524d9f56022014	2022-01-21 09:29:50.939471+00	20220121092950_change_name_fields	\N	\N	2022-01-21 09:29:50.9202+00	1
a4f635df-8f88-4bbf-80a5-29a21ded7d75	9f208cea5ae30020779d6d399feb138e0d828a0b1fa44af860cd7e6381f577cc	2022-01-21 09:33:28.215231+00	20220121093327_add_relation	\N	\N	2022-01-21 09:33:28.201501+00	1
b42c25e9-9aeb-4ae6-9357-96bc9675479a	38ae23a6eaadc1263750d2079a944cba98610fec7a2ecf0dc25f1b7494aa921a	2022-01-21 09:42:12.501647+00	20220121094212_add_ids_to_bike	\N	\N	2022-01-21 09:42:12.477948+00	1
\.


--
-- Name: BikeBrand_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."BikeBrand_id_seq"', 1, true);


--
-- Name: BikeColor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."BikeColor_id_seq"', 1, true);


--
-- Name: BikeModel_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."BikeModel_id_seq"', 1, true);


--
-- Name: Bike_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Bike_id_seq"', 1, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 3, true);


--
-- Name: BikeBrand BikeBrand_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BikeBrand"
    ADD CONSTRAINT "BikeBrand_pkey" PRIMARY KEY (id);


--
-- Name: BikeColor BikeColor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BikeColor"
    ADD CONSTRAINT "BikeColor_pkey" PRIMARY KEY (id);


--
-- Name: BikeModel BikeModel_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BikeModel"
    ADD CONSTRAINT "BikeModel_pkey" PRIMARY KEY (id);


--
-- Name: Bike Bike_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Bike"
    ADD CONSTRAINT "Bike_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: BikeBrand_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "BikeBrand_name_key" ON public."BikeBrand" USING btree (name);


--
-- Name: BikeColor_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "BikeColor_name_key" ON public."BikeColor" USING btree (name);


--
-- Name: BikeModel_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "BikeModel_name_key" ON public."BikeModel" USING btree (name);


--
-- Name: Bike_chassisNumber_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Bike_chassisNumber_key" ON public."Bike" USING btree ("chassisNumber");


--
-- Name: Bike_engineNumber_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Bike_engineNumber_key" ON public."Bike" USING btree ("engineNumber");


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: User_username_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_username_key" ON public."User" USING btree (username);


--
-- Name: BikeModel BikeModel_bikeBrandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."BikeModel"
    ADD CONSTRAINT "BikeModel_bikeBrandId_fkey" FOREIGN KEY ("bikeBrandId") REFERENCES public."BikeBrand"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Bike Bike_bikeBrandId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Bike"
    ADD CONSTRAINT "Bike_bikeBrandId_fkey" FOREIGN KEY ("bikeBrandId") REFERENCES public."BikeBrand"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Bike Bike_bikeColorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Bike"
    ADD CONSTRAINT "Bike_bikeColorId_fkey" FOREIGN KEY ("bikeColorId") REFERENCES public."BikeColor"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Bike Bike_bikeModelId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Bike"
    ADD CONSTRAINT "Bike_bikeModelId_fkey" FOREIGN KEY ("bikeModelId") REFERENCES public."BikeModel"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

