import varieties from '../static/varieties.json'
import priceList from '../static/price_list.json'
export const state = () => ({
    varieties: [],
    priceList,
    segments: [],
    promotions: [
      {
        title:'ogóriki',
        type:'pikling',
        src: ['ogorki/severin.jpg',
              'ogorki/severin.jpg',],
        crops: ['bjorn', 'severin'],
        terms: '5 + 1 gratis',
        color: '#2B6034',
        endTime: '2022-03-31',
        posterImg: "/promocje/ogorki/Pikling_na_5+_'21-'22.jpg",
        statuteDownloadLink: "/promocje/ogorki/Regulamin_promocji_Pikling_na_5+_'21-'22.pdf",
        statute: [
          {
            title: 'postanowienia ogólne',
            details: [
              `Niniejszy regulamin sprzedaży premiowej (zwany dalej „Regulaminem”) określa zasady
              promocji organizowanej pod nazwą „Pickling na 5+ ’21-‘22” (zwanej dalej „Promocją”).`,
              `Wyłącznym organizatorem Promocji jest ENZA ZADEN Sp. z o.o. (zwana dalej
                „Organizatorem”), z siedzibą w Warszawie, ul. Puławska 543 lok 17, 02-844 Warszawa, wpisana do
                rejestru przedsiębiorców prowadzonego przez Sąd Rejonowy Warszawa XIII Wydział Gospodarczy
                Krajowego Rejestru Sadowego pod numerem KRS 0000137014 REGON 015242705, NIP 9512061972
                kapitał zakładowy 50 000 zł, e-mail: biuro@enzazaden.pl`
            ]
          },
          {
            title: 'zasady promocji',
            details: [
              `W Promocji mogą wziąć udział producenci warzyw (zwani dalej „Uczestnikami”), którzy w
              czasie trwania Promocji zakupią jednorazowo w celu zabezpieczenia swoich potrzeb produkcyjnych
              (uprawy), co najmniej 5 (pięć) opakowań po 250 nasion każde jednej i tej samej odmiany`,
              `Promocja dotyczy nasion odmian: Bjorn F1 i Severin F1`,
              `Promocja „Pickling na 5+ ’21-‘22” nie łączy się z innymi promocjami dotyczącymi produktów
              w postaci nasion.`,
              `Każdy Uczestnik, który w czasie trwania Promocji zakupi nasiona ogórka brodawkowego
              (Pickling) na warunkach wymienionych w § 2 pkt. 1 Regulaminu otrzyma jedno opakowanie nasion
              ogórka brodawkowego zawierające 250 nasion, bezpłatnie. Zakup promocyjnych nasion ogórka
              brodawkowego może zostać zrealizowany bezpośrednio u Organizatora lub u partnerów handlowych
              Organizatora, posiadających nasiona ogórka brodawkowego w swojej ofercie i uczestniczącego w
              Promocji.`,
              `Każdy uczestnik może wziąć udział w promocji dowolną ilość razy`,
              `Promocja trwa od 2 listopada 2021r. do 31 marca 2022r. lub do wyczerpania zapasu nasion.`
            ]
          },{
            title: 'postanowienia końcowe',
            details: [
              `Regulamin jest dostępny w siedzibie Organizatora.`,
              `Regulamin obowiązuje od 1 listopada 2021`
            ]
          }
        ],
        timer: '',
      },
      {
        title:'papryki',
        type: 'słodkie papryki',
        src: ["papryki/dragoney.jpg",
        "papryki/banckers.jpg",
                "papryki/maduro.jpg"],
        crops: ['dragoney', 'banckers', 'maduro'],
        terms: '10 + 1 za 1zł',
        color: '#C92128',
        endTime: '2022-03-18',
        posterImg: "/promocje/papryki/Promocja_Papryka_10_+1.jpg",
        statuteDownloadLink: "/promocje/papryki/Regulamin_promocji_Papryka_10_+1.pdf",
        statute: [
          {
            title: 'postanowienia ogólne',
            details: [
              `Niniejszy regulamin sprzedaży premiowej (zwany dalej „Regulaminem”) określa zasady
              promocji organizowanej pod nazwą „PAPRYKA 10+1” (zwanej dalej „Promocją”).`,
              `Wyłącznym organizatorem Promocji jest ENZA ZADEN Sp. z o.o. (zwana dalej
                „Organizatorem”), z siedzibą w Warszawie, ul. Puławska 543 lok 17, 02-844 Warszawa, wpisana do
                rejestru przedsiębiorców prowadzonego przez Sąd Rejonowy Warszawa XIII Wydział Gospodarczy
                Krajowego Rejestru Sadowego pod numerem KRS 0000137014 REGON 015242705, NIP 9512061972
                kapitał zakładowy 50 000 zł, e-mail: biuro@enzazaden.pl`
            ]
          },
          {
            title: 'zasady promocji',
            details: [
              `W Promocji mogą wziąć udział producenci warzyw (zwani dalej „Uczestnikami”), którzy w
              czasie trwania Promocji zakupią jednorazowo w celu zabezpieczenia swoich potrzeb produkcyjnych
              (uprawy), co najmniej 10 (dziesięć) opakowań po 500 nasion każde.`,
              `Promocja dotyczy nasion odmian: Dragoney, Banckers i Maduro`,
              `Promocja „PAPRYKA 10+1” nie łączy się z innymi promocjami dotyczącymi produktów w
              postaci nasion.`,
              `Każdy Uczestnik, który w czasie trwania Promocji zakupi nasiona papryki słodkiej na
              warunkach wymienionych w § 2 pkt. 1 Regulaminu może zakupić jedno opakowanie nasion papryki
              słodkiej zawierające 500 nasion, w cenie 1 zł netto + 8% VAT. Zakup promocyjnych nasion papryki
              słodkiej może zostać zrealizowany bezpośrednio u Organizatora lub u partnerów handlowych
              Organizatora, posiadających nasiona papryki słodkiej w swojej ofercie.`,
              `Każdy uczestnik może wziąć udział w promocji dowolną ilość razy`,
              `Promocja trwa od 1 października 2021r. do 18 marca 2022r. lub do wyczerpania zapasu
              nasion.`
            ]
          },{
            title: 'postanowienia końcowe',
            details: [
              `Regulamin jest dostępny w siedzibie Organizatora.`,
              `Regulamin obowiązuje 24 września 2021`
            ]
          }
        ],
      },
      {
        title:'kapustne',
        type:'kapustne',
        src: ["kapustne/B_WC/strukta.jpg",
        "kapustne/B_WC/storka.jpg",
        "kapustne/B_WC/tca_581.jpg",
        "kapustne/B_WC/tca_581.jpg",
        "kapustne/B_CF/chione.jpg",],
        crops: ['strukta', 'storka', 'coronata', 'tca 581', 'chione'],
        terms: '10 + 1 za 1zł',
        color: '#436636',
        endTime: '2022-04-30',
        posterImg: "/promocje/kapustne/Promocja_Kapustne_10+1.jpg",
        statuteDownloadLink: "/promocje/kapustne/Regulamin_Promocja _10+1_2022.pdf",
        statute: [
          {
            title: 'postanowienia ogólne',
            details: [
              `Niniejszy regulamin sprzedaży premiowej (zwany dalej „Regulaminem”) określa zasady promocji
              organizowanej pod nazwą „KAPUSTNE 10+1 - 2022” (zwanej dalej „Promocją”).`,
              `Wyłącznym organizatorem Promocji jest ENZA ZADEN Sp. z o.o. (zwaną dalej „Organizatorem”), z siedzibą w
              Warszawie, ul. Puławska 543 lok 17, 02-844 Warszawa, wpisana do rejestru przedsiębiorców prowadzonego przez
              Sąd Rejonowy Warszawa XIII Wydział Gospodarczy Krajowego Rejestru Sadowego pod numerem KRS 0000137014
              REGON 015242705, NIP 9512061972 kapitał zakładowy 50 000 zł, e-mail: biuro@enzazaden.pl`
            ]
          },
          {
            title: 'zasady promocji',
            details: [
              `W Promocji mogą wziąć udział producenci warzyw (zwani dalej „Uczestnikami”), którzy w czasie trwania
              Promocji zakupią jednorazowo w celu zabezpieczenia swoich potrzeb produkcyjnych (uprawy), co najmniej 10
              (dziesięć) opakowań po 2,5 tysiąca nasion każde, jednej i tej samej odmiany.`,
              `Promocja dotyczy nasion odmian: Kapusta biała: Coronata F1, Storka F1, Strukta F1, TCA 581 F1, Kalafior: Chione F1`,
              `Promocja „KAPUSTNE 10+1 - 2022” nie łączy się z innymi promocjami dotyczącymi produktów w postaci
              nasion.`,
              `Każdy Uczestnik, który w czasie trwania Promocji zakupi nasiona odmian wymienionych w § 2 pkt. 2 na
              warunkach wymienionych w § 2 pkt. 1 niniejszego regulaminu może zakupić jedno opakowanie nasion tej samej
              odmiany i tego samego gatunku, zawierające 2 500 nasion, w cenie 1 zł netto + 8% VAT. Zakup promocyjnych nasion
              może zostać zrealizowany bezpośrednio u Organizatora lub u partnerów handlowych Organizatora, posiadających
              nasiona wymienionych w § 2 pkt. 2 w swojej ofercie i uczestniczących w Promocji`,
              `Każdy uczestnik może wziąć udział w promocji dowolną ilość razy`,
              `Promocja trwa od 22 listopada 2021r. do 30 kwietnia 2022r. lub do wyczerpania zapasu nasion.`,
              `Enza Zaden zastrzega sobie możliwość przedłużenia lub skrócenia trwania promocji.`
            ]
          },{
            title: 'postanowienia końcowe',
            details: [
              `Regulamin jest dostępny w siedzibie Organizatora.`,
              `Regulamin obowiązuje od 22 listopada 2021`
            ]
          }
        ],
        timer: '',
      }
    ],
    searchPhrase: ''
})

export const actions = {
  fetchVarieties(context){
    let varietiesArray = []
    for(let varieti in varieties) {
      varietiesArray.push({id: varieti, ...varieties[varieti]})
    }
    context.commit('setVarieties', varietiesArray)
    context.dispatch('allSegments')
  },
  allSegments({state, commit}){
    const segments = [...new Set(state.varieties.map(ele => ele.segment))]
    commit('setSegments', segments)
  },
  setSearchPhrase({commit}, searchPhrase){
    commit('setSearchPhrase', searchPhrase ? searchPhrase.toLowerCase() : "")
  }
}

export const mutations = {
  setVarieties(state, payload){
    state.varieties = payload
  },
  setSegments(state, payload) {
    state.segments = payload
  },
  setSearchPhrase(state, payload) {
    state.searchPhrase = payload
  },
}

export const getters = {
    getVarieties(state){
        return state.varieties
    },
    getPromotions(state){
        return state.promotions
    },
    getCropsPrice(state){
      return state.priceList
    },
    getSegments(state){
      return state.segments
    },
    getSearchPhrase(state){
      return state.searchPhrase
    }
}