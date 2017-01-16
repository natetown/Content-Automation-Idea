<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">


				<Root>
				<xsl:for-each select="Root/record">
						<record name="{@name}" type="{@type}">
							<item name="{item/@name}">
								<value>
									<xsl:for-each select="item/value/item">
									<item name="{@name}">
					        		<value><xsl:value-of select="@value"/></value>
					        		</item>
					        		</xsl:for-each>
					        	</value>	
					        </item>		
	        			</record>
	        		</xsl:for-each>
	        	</Root>
</xsl:template>

</xsl:stylesheet>

		<!--
			
			

		<xsl:for-each select="Root/item/value"> -->
	<!-- For every record that has a child element called "value"
			Add the value of the value element to the inside of >< tags of the parent element.
			Delete the "value" child element.
			-->

