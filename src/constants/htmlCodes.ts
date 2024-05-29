export const htmlBaseCode = `<body>
<div class="container lanies-mainContainer">
  <div class="row">
    <div class="col lanies-headerContainer">
      <!-- =================================================================================================================================================== -->
      <!--                                                                        SPECIE LOGO (CHANGE SRC URL)                                                 -->
      <!-- =================================================================================================================================================== -->
      <img
        class="img-fluid lanies-logo lanies-logo-small"
        src="https://res.cloudinary.com/dzpqzpdfk/image/upload/v1708778145/teliwis_adopts/species/logo/da02b15d-d886-4998-83f8-8720a85a76c2.png"
        alt="Logo"
      />
    </div>
  </div>
  <div class="row d-none d-md-block">
    <div class="row lanies-borderCircle">
      <div class="col circle"></div>
      <div class="col circle"></div>
      <div class="col circle"></div>
      <div class="col circle"></div>
      <div class="col circle"></div>
      <div class="col circle"></div>
      <div class="col circle"></div>
      <div class="col circle"></div>
      <div class="col circle"></div>
      <div class="col circle"></div>
      <div class="col circle"></div>
      <div class="col circle"></div>
    </div>
  </div>
  <div class="row lanies-contentContainer">
    <div class="col-12 col-md-3 lanies-icon-section">
      <div class="row h-100 lanies-icon-background">
        <!-- ============================================================= -->
        <!--                              ICON (CHANGE SRC URL)            -->
        <!-- ============================================================= -->
        <div class="col lanies-adopt-icon-container">
          <img
            class="img-fluid lanies-img-small"
            src="{{adopt_icon}}"
          />
          <!-- ============================================================= -->
          <!--                              RARITY                           -->
          <!-- ============================================================= -->
          <p class="lanies-rarity-label">{{adopt_rarity}}</p>
        </div>
      </div>
      <div class="row lanies-border-icon-circle">
        <div class="col circle-icon"></div>
        <div class="col circle-icon"></div>
        <div class="col circle-icon"></div>
        <div class="col circle-icon d-none d-md-block"></div>
        <div class="col circle-icon d-none d-md-block"></div>
      </div>
    </div>
    <div class="col-12 col-md-9 lanies-info-section">
      <div class="row lanies-banner-info-section">
        <div class="col-10 lanies-label-banner-container">
          <h6 class="col lanies-specie-name-label">
            <!-- ============================================================= -->
            <!--                          CODE                                 -->
            <!-- ============================================================= -->
            <b>{{adopt_code}}</b>
          </h6>
        </div>
        <div class="col-2 lanies-badge-container">
          <!-- ============================================================= -->
          <!--                          BADGE (CHANGE SRC ULR)               -->
          <!-- ============================================================= -->
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="row justify-content-center">
            <!-- =================================================================================================================================================== -->
            <!--                                                                          OWNERS                                                                     -->
            <!-- =================================================================================================================================================== -->
            <div class="ml-2 col-5 col-md-12 ml-10 lanies-owners-list">
              <h6 class="row justify-content-center lanies-list-label-title">
                <!-- ============================================================= -->
                <!--                          OWNERS TITLE                         -->
                <!-- ============================================================= -->
                <b>Owner</b>
              </h6>
              <ul class="lanies-ul-list">
                <!-- =====================================================================    -->
                <!--                          OWNERS LIST                                     -->
                <!-- To add a new Owner, add a <li><a href="LINK"><b>NEW OWNER</b></a></li>   -->
                <!-- Replace the # inside of href with the related owner link                 -->
                <!-- ======================================================================== -->
                {{owner_list}}
              </ul>
            </div>
            <!-- =================================================================================================================================================== -->
            <!--                                                                          DESIGNERS                                                                  -->
            <!-- =================================================================================================================================================== -->
            <div class="ml-2 col-5 col-md-12 lanies-designers-list">
              <h6 class="row justify-content-center lanies-list-label-title">
                <!-- ============================================================= -->
                <!--                          DESIGNERS TITLE                      -->
                <!-- ============================================================= -->
                <b>Designer</b>
              </h6>
              <ul class="lanies-ul-list">
                <!-- ===========================================================================    -->
                <!--                          DESIGNERS LIST                                        -->
                <!-- To add a new DESIGNER, add a <li><a href="LINK"><b>NEW DESIGNER</b></a></li>   -->
                <!-- Replace the # inside of href with the related designer link                    -->
                <!-- ============================================================================== -->
                {{designer_list}}
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8 lanies-traits-section">
          <div class="row lanies-banner-container">
            <div class="triangle-right"></div>
            <!-- ============================================================= -->
            <!--                          BANNER TRAIT TITLE                   -->
            <!-- ============================================================= -->
            <h6 class="lanies-banner">Traits</h6>
            <div class="lanies-triangle-left"></div>
          </div>
          {{traits_list}}
           <!-- ============================================================================================================================================ -->
          <!--                                                           Finish Trait Section                                                               -->
          <!-- ============================================================================================================================================= -->
        </div>
      </div>
    </div>
    <!-- =================================================================================================================================================== -->
    <!--                                                                          ITEMS                                                                      -->
    <!-- =================================================================================================================================================== -->
  </div>
  <!-- ============================================================= -->
  <!--       ITEMS BANNER (ONLY DISPLAY ON PC SCREEN)                -->
  <!-- ============================================================= -->
  <div class="row lanies-banner-items-container mt-4 d-none d-md-flex">
    <h6 class="lanies-banner-items">Items</h6>
    <div class="lanies-items-triangle-left"></div>
  </div>
  <!-- ============================================================= -->
  <!--       ITEMS BANNER (ONLY DISPLAY ON MOVIL SCREEN)             -->
  <!-- ============================================================= -->
  <h6
    class="row row justify-content-center mt-3 lanies-banner-movil w-120 d-md-none"
  >
    Items
  </h6>

  <div class="row lanies-item-expositor">
    {{item_list}}
  </div>
  <!-- =================================================================================================================================================== -->
  <!--                                                                          EXTRA PARAGRAPH                                                            -->
  <!-- =================================================================================================================================================== -->
  <div class="row">
    <div class="col-12 col-md-8 lanies-extra-container">
      <div class="row lanies-extra-label"><b>EXTRA</b></div>
      <div class="row lanies-paragraph-container">
        <div class="col">
          <div class="row">
            <p><b>PLEASE NOTIFY ME OF THE CHANGE OF OWNERSHIP.</b></p>
          </div>
          <div class="row">
            <p><b>SO I CAN EDIT THE MASTERLIST</b></p>
          </div>
          <br />
          <div class="row">
            <p><b>LET ME KNOWN IF YOU HAVE USED ITEMS ON</b></p>
          </div>
          <div class="row">
            <p><b>YOUR CHARACTER TO ADD IT TO YOUR INVENTORY</b></p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4 d-none d-md-block">
      <div class="row lanies-tail-type-banner-container">
        <div class="lanies-tail-type-triangle-right"></div>
        <div class="lanies-tail-type-banner">Tail Type</div>
        <div class="lanies-tail-type-triangle-left"></div>
      </div>
      <div class="row justify-content-center">
        <!-- =================================================================================================================================================== -->
        <!--                                             FORM IMAGE (CHANGE SRC URL TO THE RELATED FORM)                                                         -->
        <!-- =================================================================================================================================================== -->
        <img
          class="img-fluid"
          width="100px"
          src="{{adopt_form_url}}"
        />
      </div>
    </div>
  </div>
</div>
</body>`;

export const ownerHtmlLi = `<li><a href="{{owner_url}}" target="_blank"><b>{{owner_name}}</b></a></li>`;
export const designerHtmlLi = `<li><a href="{{designer_url}}" target="_blank"><b>{{designer_name}}</b></a></li>`;
export const traitHtml = `
<!-- =================================================================================================================================================== -->
<!--                                                                       TRAIT {{trait_number}}                                                        -->
<!-- =================================================================================================================================================== -->
<div class="row lanies-trait-container">
<div class="col-1"></div>
<div class="col-1">
  <!-- ============================================================= -->
  <!--                          STAR ICON                            -->
  <!-- ============================================================= -->
  <i class="fa-solid fa-star lanies-star-icon"></i>
</div>
<div class="col-4 lanies-rarity-label-title">
  <!-- ============================================================= -->
  <!--                          TRAIT RARITY                         -->
  <!-- ============================================================= -->
  <span><b>{{trait_rarity}}</b></span>
</div>
<div class="col-4 lanies-trait-info-label">
  <!-- ============================================================= -->
  <!--                         TRAIT ADDITIONAL INFO                 -->
  <!-- ============================================================= -->
  <span><b>{{trait_additional_info}}</b></span>
</div>
</div>`;
export const itemHtml = ` 
<!-- ============================================================= -->
<!--                             ITEM {{item_number}}              -->
<!-- ============================================================= -->
<div class="col-4 col-md-2">
  <img
    class="img-fluid"
    src="{{item_url}}"
  />
</div>`;
